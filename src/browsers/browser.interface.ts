export interface BrowsersTypesCreationAttr {
   browserTypeId: number
   webSocketAdress: string | null
   projectId: string
}
export interface BrowsersTabsAttr {
   serviceName: string
   browserId: string
   browserTabId: string
   startedPage: string
   cookie: string | null
   localstorage: string | null
   devtools?: true | false
   viewPort?: string
}