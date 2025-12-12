import { useCallback } from "react";

// Enums for modules and actions
export enum Module {
  USER = "user",
  SYSTEM = "system",
  ECOMMERCE = "ecommerce",
}

export enum UserSubModule {
  USERS = "users",
  ROLES = "roles",
  PERMISSIONS = "permissions",
  ACCOUNT = "account",
}

export enum SystemSubModule {
  LOGS = "logs",
  SETTINGS = "settings",
  BACKUPS = "backups",
}

export enum EcommerceSubModule {
  PRODUCTS = "products",
  CATEGORIES = "categories",
  ORDERS = "orders",
  CUSTOMERS = "customers",
}

export type SubModule = UserSubModule | SystemSubModule | EcommerceSubModule;

export enum CrudAction {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
}

export enum DeleteType {
  SOFT = "soft",
  HARD = "hard",
}

// Define the gtag function type
interface GTag {
  (command: "event", eventName: string, params?: Record<string, unknown>): void;
}

// Type guard for gtag
const isGTagAvailable = (win: typeof window): win is typeof window & { gtag: GTag } =>
  typeof win !== "undefined" && typeof (win as unknown as { gtag: GTag }).gtag === "function";

interface TrackEventProps {
  eventName: string;
  module: Module;
  submodule: SubModule;
  itemType: string;
  itemId?: string;
  action: CrudAction;
  deleteType?: DeleteType;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((props: TrackEventProps): void => {
    const { eventName, module, submodule, itemType, itemId, action, deleteType } = props;

    if (isGTagAvailable(window)) {
      window.gtag("event", eventName, {
        module,
        submodule,
        module_path: `${module}/${submodule}`,
        item_type: itemType,
        item_id: itemId,
        action,
        delete_type: deleteType,
        category: "crud",
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  const trackCreate = useCallback(
    (module: Module, submodule: SubModule, itemType: string, itemId?: string): void => {
      trackEvent({
        eventName: "crud_create",
        module,
        submodule,
        itemType,
        itemId,
        action: CrudAction.CREATE,
      });
    },
    [trackEvent]
  );

  const trackUpdate = useCallback(
    (module: Module, submodule: SubModule, itemType: string, itemId: string): void => {
      trackEvent({
        eventName: "crud_update",
        module,
        submodule,
        itemType,
        itemId,
        action: CrudAction.UPDATE,
      });
    },
    [trackEvent]
  );

  const trackDelete = useCallback(
    (
      module: Module,
      submodule: SubModule,
      itemType: string,
      itemId: string,
      isHardDelete: boolean = false
    ): void => {
      trackEvent({
        eventName: "crud_delete",
        module,
        submodule,
        itemType,
        itemId,
        action: CrudAction.DELETE,
        deleteType: isHardDelete ? DeleteType.HARD : DeleteType.SOFT,
      });
    },
    [trackEvent]
  );

  return {
    trackCreate,
    trackUpdate,
    trackDelete,
  };
};
