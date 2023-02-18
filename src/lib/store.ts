import { writable } from "svelte/store";
import * as ackeeTracker from 'ackee-tracker';
import { type AckeeInstance } from "ackee-tracker";

export const currentNav = writable<undefined | string>(undefined)

export const ackee = writable<AckeeInstance | undefined>(undefined);