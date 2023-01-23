export interface IAppBasic {
  appName: string
}

export interface ICreateAppData {
  appBasic: IAppBasic
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: {appName: ''},
}

export type StepProps = {
  data: ICreateAppData
}
