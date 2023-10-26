import { PageLayout } from 'layout'
import { FC, ReactElement } from 'react'

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement | null => {
	return <PageLayout></PageLayout>
}
