import NiceModal, { useModal } from '@ebay/nice-modal-react'
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
	getCreateFormDefaultValues
} from './components'
import { useCreateViolation, useDeleteViolation } from './hooks'

export const ViolationDrawer = NiceModal.create<ViolationDrawerProps>(({ violation }): ReactElement | null => {
	const { visible, hide } = useModal()
	const [stage, setStage] = useState(1)
	const createMethods = useForm<CreateFormValues>({ defaultValues: createFormDefaultValues })
	const createMutation = useCreateViolation({ onSuccess: closeDrawer })
	const deleteMutation = useDeleteViolation({ onSuccess: closeDrawer })

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
		createMutation.mutate(values)
	}

	const deleteViolation = () => {
		if (!violation?._id) {
			throw new Error('invalid violation id')
		}

		NiceModal.show(ConfirmDialog, {
			title: 'Удаление записи о нарушении',
			body: 'Вы действительно хотите удалить запись о нарушении?',
			denyButtonText: 'Нет',
			onSuccess: () => deleteMutation.mutate(violation._id)
		})
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
		<Drawer title='Нарушение' width={1100} open={visible} onClose={closeDrawerWithConfirmHandler}>
			<Stack flex='1 1 auto' overflow='auto'>
				<Stack direction='row' spacing={2} p={3} flexGrow={1}>
					<FormBox width={250} height='100%'>
						<Stages value={stage} status={null} onChange={changeStageHandler} />
					</FormBox>
					<FormBox flexGrow={1} height='100%'>
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
								3: <CourtForm></CourtForm>
							}[stage]
						}
					</FormBox>
					<FormBox width={300} height='100%'></FormBox>
				</Stack>
			</Stack>
			{
				{
					1: <CreateActions status={status} onCancel={closeDrawerWithConfirmHandler} onDelete={deleteViolation} />,
					2: <></>,
					3: <></>
				}[stage]
			}
		</Drawer>
	)
})
