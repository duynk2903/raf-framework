export interface QuestionInDto {
  question: any
}

export interface ChatBoxProps {
  isOpen?: boolean
  handleClose?: () => void
}

export interface ChatBoxDataModel {
  content: string
  avatar: any
  userType: ChatBoxUserType
}

export enum ChatBoxUserType {
  USER = 'user',
  AI = 'ai'
}
