import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="max-w-screen-md mx-auto px-5">{children}</div>
}

export default Container
