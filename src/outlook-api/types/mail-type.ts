export interface MailResponse {
  "@odata.context": string;
  value: Mail[];
  "@odata.nextLink": string;
}

export interface Mail {
  "@odata.etag": string;
  id: string;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  changeKey: string;
  categories: any[];
  receivedDateTime: Date;
  sentDateTime: Date;
  hasAttachments: boolean;
  internetMessageId: string;
  subject: string;
  bodyPreview: string;
  importance: Importance;
  parentFolderId: string;
  conversationId: string;
  conversationIndex: string;
  isDeliveryReceiptRequested: null;
  isReadReceiptRequested: boolean;
  isRead: boolean;
  isDraft: boolean;
  webLink: string;
  inferenceClassification: InferenceClassification;
  body: Body;
  sender: From;
  from: From;
  toRecipients: From[];
  ccRecipients: any[];
  bccRecipients: any[];
  replyTo: From[];
  flag: Flag;
}

export interface Body {
  contentType: ContentType;
  content: string;
}

export enum ContentType {
  HTML = "html",
}

export interface Flag {
  flagStatus: FlagStatus;
}

export enum FlagStatus {
  NotFlagged = "notFlagged",
}

export interface From {
  emailAddress: EmailAddress;
}

export interface EmailAddress {
  name: string;
  address: string;
}

export enum Importance {
  Normal = "normal",
}

export enum InferenceClassification {
  Focused = "focused",
  Other = "other",
}
