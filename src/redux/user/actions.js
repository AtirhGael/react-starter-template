import { types } from "./types";

/**
 * @description get action.
 */

export const fetch_user_info = () => ({
	type: types.GET_REQUEST,
	payload: {ex: 'welcome'}
})
