declare module "electron-notifications" {
  export default class Notifications {
    constructor(options: NotificationsOptions);
    show(): void;
  }

  interface NotificationsOptions {
    title?: string;
    body?: string;
    icon?: string;
    onClick?: () => void;
    onShow?: () => void;
    onClose?: () => void;
  }
}
