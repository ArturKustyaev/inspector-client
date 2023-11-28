import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack } from '@mui/material'
import { CreateViolationBody } from 'api'
import { ReactElement, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ReviewStatus, ViolationStatus } from 'types'
import { ConfirmDialog, Drawer } from 'ui-kit'
import { ViolationDrawerProps } from './ViolationDrawer.types'
import {
  CourtForm,
  CourtFormValues,
  CreateActions,
  CreateForm,
  CreateFormValues,
  FormBox,
  ReviewerDataGrid,
  Stages,
  courtFormDefaultValues,
  createFormDefaultValues,
  createViolationSchema,
  getCreateFormDefaultValues,
} from './components'
import { courtViolationSchema } from './components/CourtForm/CourtForm.validation'
import {
  useApproveViolation,
  useCreateViolation,
  useDeleteViolation,
  useUpdateViolation,
  useViolationChangeStatus,
} from './hooks'

export const ViolationDrawer = NiceModal.create<ViolationDrawerProps>(({ violation }): ReactElement | null => {
  const { visible, hide } = useModal()
  const [stage, setStage] = useState(1)
  const createMethods = useForm<CreateFormValues>({
    defaultValues: createFormDefaultValues,
    resolver: yupResolver(createViolationSchema),
  })
  const courtMethods = useForm<CourtFormValues>({
    defaultValues: courtFormDefaultValues,
    resolver: yupResolver(courtViolationSchema),
  })
  const createMutation = useCreateViolation({ onSuccess: closeDrawer })
  const updateMutation = useUpdateViolation({ onSuccess: closeDrawer })
  const deleteMutation = useDeleteViolation({ onSuccess: closeDrawer })
  const changeStatusMutation = useViolationChangeStatus({ onSuccess: closeDrawer })
  const approveMutation = useApproveViolation({ onSuccess: closeDrawer })

  const someFormIsDirty = createMethods.formState.isDirty || courtMethods.formState.isDirty
  const inspector = violation?.violationInfo.user
  const status = violation?.violationInfo.status
  const created = violation?.createdAt

  useEffect(() => {
    if (visible) {
      createMethods.reset(getCreateFormDefaultValues(violation))
    }
  }, [visible])

  const changeStageHandler = (stage: number) => {
    setStage(stage)
  }

  const createOrUpdateViolation = (values: CreateViolationBody) => {
    if (violation?._id) {
      updateMutation.mutate({ violationId: violation._id, ...values })
    } else {
      createMutation.mutate(values)
    }
  }

  const deleteViolation = () => {
    if (!violation?._id) {
      throw new Error('invalid violation id')
    }

    NiceModal.show(ConfirmDialog, {
      title: 'Удаление записи о нарушении',
      body: 'Вы действительно хотите удалить запись о нарушении?',
      denyButtonText: 'Нет',
      onSuccess: () => deleteMutation.mutate(violation._id),
    })
  }

  const updateViolationStatus = (status: ViolationStatus) => {
    if (!violation?._id) {
      throw new Error('invalid violation id')
    }

    changeStatusMutation.mutate({ id: violation._id, status })
  }

  const approveViolation = (status: ReviewStatus, message?: string) => {
    if (!violation?._id) {
      throw new Error('invalid violation id')
    }

    approveMutation.mutate({
      id: violation._id,
      date: new Date().toISOString(),
      status,
      message,
    })
  }

  const closeDrawerWithConfirmHandler = () => {
    someFormIsDirty ? NiceModal.show(ConfirmDialog, { onSuccess: closeDrawer }) : closeDrawer()
  }

  function closeDrawer() {
    hide()

    setTimeout(() => {
      setStage(1)
      createMethods.reset(createFormDefaultValues)
      courtMethods.reset(courtFormDefaultValues)
    }, 300)
  }

  return (
    <Drawer title="Нарушение" width={1100} open={visible} onClose={closeDrawerWithConfirmHandler}>
      <Stack flex="1 1 auto" overflow="auto">
        <Stack direction="row" spacing={2} p={3} flexGrow={1}>
          <FormBox width={250} flexShrink={0} height="100%">
            <Stages value={stage} status={null} onChange={changeStageHandler} />
          </FormBox>
          <FormBox flexGrow={1} height="100%">
            {
              {
                1: (
                  <FormProvider {...createMethods}>
                    <CreateForm
                      createdAt={created}
                      inspector={inspector}
                      status={status}
                      onSubmit={createOrUpdateViolation}
                    />
                  </FormProvider>
                ),
                2: <ReviewerDataGrid data={violation?.review ?? []} />,
                3: (
                  <FormProvider {...courtMethods}>
                    <CourtForm status={status} />
                  </FormProvider>
                ),
              }[stage]
            }
          </FormBox>
          {stage !== 2 && <FormBox width={300} flexShrink={0} height="100%"></FormBox>}
        </Stack>
      </Stack>
      <CreateActions
        stage={stage}
        status={status}
        createControl={createMethods.control}
        onUpdateStatus={updateViolationStatus}
        onApprove={approveViolation}
        onCancel={closeDrawerWithConfirmHandler}
        onDelete={deleteViolation}
      />
    </Drawer>
  )
})
