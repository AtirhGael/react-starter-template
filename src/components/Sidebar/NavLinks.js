/* eslint-disable import/no-anonymous-default-export */
import MenuType from "../../enums/MenuType"
import URL from "../../urls/frontendUrl"

export default [
    {[MenuType.DASHBOARD]: {
        headerTitle: null,
        items: [
             {
                "menu_title": "My dashboard",
                "menu_icon": "fa fa-bell",
                "path": URL.HOME.DASHBOARD,
                "type_multi": null,
                "child_routes": null,
            },
        ]
    }},
]