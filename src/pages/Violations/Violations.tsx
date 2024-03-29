import NiceModal from '@ebay/nice-modal-react'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getTasksQueryOptions } from 'api'
import { PageLoader } from 'components'
import { useDebounceValue, useUserPrivileges } from 'hooks'
import { PageLayout } from 'layout'
import { ChangeEvent, FC, ReactElement, useState } from 'react'
import { StyledToolbar, StyledViolationsWrapper } from './Violations.styles'
import { ViolationCard, ViolationDrawer } from './components'

interface ViolationsProps {}

export const Violations: FC<ViolationsProps> = (): ReactElement | null => {
  const { isAdmin, isInspector } = useUserPrivileges()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounceValue(search, 1000)
  const { data, isPending, isSuccess } = useInfiniteQuery(getTasksQueryOptions({ query: debouncedSearch || undefined }))

  const isCreateButtonShowed = isAdmin || isInspector

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const createViolationClickHandler = () => {
    NiceModal.show(ViolationDrawer)
  }

  return (
    <PageLayout>
      <StyledViolationsWrapper>
        <StyledToolbar direction="row" spacing={2}>
          <TextField label="Поиск" onChange={searchChangeHandler} />
          {isCreateButtonShowed && <Button onClick={createViolationClickHandler}>Добавить нарушение</Button>}
        </StyledToolbar>
        {isPending && <PageLoader />}
        {isSuccess && (
          <>
            <Grid spacing={2} container>
              {data.pages.map((page) =>
                page.data.map((violation) => (
                  <Grid key={violation._id} xl={4} lg={4} sm={6} xs={12} item>
                    <ViolationCard violation={violation} />
                  </Grid>
                )),
              )}
            </Grid>
            {data.pages[0].total === 0 && (
              <Stack flexGrow={1} justifyContent="center" alignItems="center">
                <Typography>Нет записей о нарушениях</Typography>
              </Stack>
            )}
          </>
        )}
      </StyledViolationsWrapper>
    </PageLayout>
  )
}
