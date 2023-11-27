import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack } from '@mui/material'
import { CreateViolationBody } from 'api'
import { ReactElement, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ConfirmDialog, Drawer } from 'ui-kit'
import { ViolationDrawerProps } from './ViolationDrawer.types'
import {
  CourtForm,
  CreateActions,
  CreateForm,
  CreateFormValues,
  FormBox,
  Stages,
  createFormDefaultValues,
  createViolationSchema,
  getCreateFormDefaultValues,
} from './components'
import { useCreateViolation, useDeleteViolation, useUpdateViolation, useViolationChangeStatus } from './hooks'

export const ViolationDrawer = NiceModal.create<ViolationDrawerProps>(({ violation }): ReactElement | null => {
  const { visible, hide } = useModal()
  const [stage, setStage] = useState(1)
  const createMethods = useForm<CreateFormValues>({
    defaultValues: createFormDefaultValues,
    resolver: yupResolver(createViolationSchema),
  })
  const createMutation = useCreateViolation({ onSuccess: closeDrawer })
  const updateMutation = useUpdateViolation({ onSuccess: closeDrawer })
  const deleteMutation = useDeleteViolation({ onSuccess: closeDrawer })
  const changeStatusMutation = useViolationChangeStatus({ onSuccess: closeDrawer })

  const someFormIsDirty = createMethods.formState.isDirty
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

  const approvalViolation = () => {
    if (!violation?._id) {
      throw new Error('invalid violation id')
    }

    changeStatusMutation.mutate({ id: violation._id, status: 'coordination' })
  }

  const closeDrawerWithConfirmHandler = () => {
    someFormIsDirty ? NiceModal.show(ConfirmDialog, { onSuccess: closeDrawer }) : closeDrawer()
  }

  function closeDrawer() {
    hide()

    setTimeout(() => {
      createMethods.reset({})
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
                2: <></>,
                3: <CourtForm></CourtForm>,
              }[stage]
            }
          </FormBox>
          <FormBox width={300} flexShrink={0} height="100%"></FormBox>
        </Stack>
      </Stack>
      {
        {
          1: (
            <CreateActions
              control={createMethods.control}
              status={status}
              onApproval={approvalViolation}
              onCancel={closeDrawerWithConfirmHandler}
              onDelete={deleteViolation}
            />
          ),
          2: <></>,
          3: <></>,
        }[stage]
      }
    </Drawer>
  )
})
