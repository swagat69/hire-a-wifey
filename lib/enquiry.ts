/**
 * Shape and initial value for the enquiry form's action state.
 *
 * These live outside app/actions.ts on purpose: a "use server" module may
 * only export async functions, so exporting a plain object from there
 * silently yields `undefined` at runtime.
 */

export type EnquiryState = {
  status: "idle" | "success" | "error";
  errors: Record<string, string>;
  values: Record<string, string>;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  errors: {},
  values: {},
};
