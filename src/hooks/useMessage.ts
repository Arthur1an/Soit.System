import { Modal, notification, message } from "ant-design-vue";
import { h } from "vue";
import { ArgsProps, ConfigProps } from "ant-design-vue/lib/notification";
import { ModalFunc, ModalFuncProps } from "ant-design-vue/lib/modal/Modal";
import AoIcon from "@/components/Icon.vue";

interface ConfirmOptions {
  info: ModalFunc;
  success: ModalFunc;
  error: ModalFunc;
  warn: ModalFunc;
  warning: ModalFunc;
}

export interface NotifyApi {
  info(config: ArgsProps): void;

  success(config: ArgsProps): void;

  error(config: ArgsProps): void;

  warn(config: ArgsProps): void;

  warning(config: ArgsProps): void;

  open(args: ArgsProps): void;

  close(key: string): void;

  config(options: ConfigProps): void;

  destroy(): void;
}

interface ModalRes {
  destroy: () => void;
  update: (newConfig: ModalFuncProps) => void;
}

interface ModalMethod {
  info(options: ModalOptionsPartial): ModalRes;

  success(options: ModalOptionsPartial): ModalRes;

  warning(options: ModalOptionsPartial): ModalRes;

  error(options: ModalOptionsPartial): ModalRes;
}

interface ModalOptionsEx extends Omit<ModalFuncProps, "iconType"> {
  iconType: "warning" | "success" | "error" | "info";
}

type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, "content">;

type IconType = "warning" | "success" | "info" | "error";

function getIcon(iconType: string) {
  const iconMap: { icon: string; class: string } = {
    warning: { icon: "info-circle-filled", class: "modal-icon-warning" },
    success: { icon: "check-circle-filled", class: "modal-icon-success" },
    info: { icon: "info-circle-filled", class: "modal-icon-info" },
    error: { icon: "close-circle-filled", class: "modal-icon-error" },
  }[iconType as IconType];
  return h(AoIcon, {
    ...iconMap,
    icon: "ant-design:" + (iconMap?.icon || "close-circle-filled"),
  });
}

function createConfirm(options: ModalOptionsEx): ConfirmOptions {
  const iconType = options.iconType || "warning";
  Reflect.deleteProperty(options, "iconType");
  const opt: ModalFuncProps = {
    centered: true,
    icon: getIcon(iconType),
    ...options,
  };
  return Modal.confirm(opt) as any;
}

const baseOptions = {
  okText: "??????",
  centered: true,
};

function renderContent({ content }: Pick<ModalOptionsEx, "content">) {
  return h("div", {}, content as string);
}

function createModalOptions(
  options: ModalOptionsPartial,
  icon: string
): ModalOptionsPartial {
  return {
    ...baseOptions,
    ...options,
    content: renderContent(options),
    icon: getIcon(icon),
  };
}

const createModal: ModalMethod = {
  success: (options: ModalOptionsPartial) =>
    Modal.success(createModalOptions(options, "close")),
  info: (options: ModalOptionsPartial) =>
    Modal.info(createModalOptions(options, "close")),
  warning: (options: ModalOptionsPartial) =>
    Modal.warning(createModalOptions(options, "close")),
  error: (options: ModalOptionsPartial) =>
    Modal.error(createModalOptions(options, "close")),
};

interface IReplay {
  count: number;
}
export function useMessage() {
  return {
    notification: notification as NotifyApi,
    createModal,
    createConfirm,
    createConfirmDel: (content: string, title?: string) =>
      new Promise((resolve) => {
        createConfirm({
          iconType: "warning",
          title: title || "????????????",
          content,
          okType: "danger",
          onOk() {
            resolve(1);
          },
        });
      }),

    createConfirmPub: (content: string, ok: Fn) =>
      createConfirm({
        iconType: "info",
        title: "????????????",
        content,
        okType: "primary",
        onOk() {
          ok();
        },
      }),
    createMessage: message,
    createSucOrFail: (execute: number, msgFunc: (i: string) => string) => {
      const { error, success } = message;
      const func = [error][execute] || success;
      const msg = ["??????"][execute] || `??????${execute === 1 ? "" : execute + "???"}`;
      func(msgFunc(msg));
    },
    createSucFail: <T extends IReplay>(replay: T, msgFunc: (i: string) => string) => {
      const { error, success } = message,
        execute = replay.count;
      const func = [error][execute] || success;
      const msg = ["??????"][execute] || `??????${execute === 1 ? "" : execute + "???"}`;
      func(msgFunc(msg));
    },
  };
}
