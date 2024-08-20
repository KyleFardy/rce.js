export declare enum GPORTALRoutes {
    COMMAND = "https://www.g-portal.com/ngpapi/",
    REFRESH = "https://auth.g-portal.com/auth/realms/master/protocol/openid-connect/token",
    WEBSOCKET = "wss://www.g-portal.com/ngpapi/",
    ORIGIN = "https://www.g-portal.com",
    HOME = "https://www.g-portal.com/en"
}
export declare enum GPORTALWebsocketTypes {
    INIT = "connection_init",
    START = "start"
}
export declare enum LogLevel {
    NONE = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4
}
export declare enum RCEEvent {
    CONNECTED = "connected",
    MESSAGE = "message",
    PLAYER_KILL = "player_kill",
    PLAYER_JOINED = "player_joined",
    PLAYER_RESPAWNED = "player_respawned",
    PLAYER_SUICIDE = "player_suicide",
    PLAYER_ROLE_ADD = "player_role_add",
    QUICK_CHAT = "quick_chat",
    NOTE_EDIT = "note_edit",
    EVENT_START = "event_start",
    PLAYERLIST_UPDATE = "playerlist_update",
    ITEM_SPAWN = "item_spawn",
    VENDING_MACHINE_NAME = "vending_machine_name",
    KIT_SPAWN = "kit_spawn",
    KIT_GIVE = "kit_give",
    TEAM_CREATE = "team_create",
    TEAM_JOIN = "team_join",
    TEAM_LEAVE = "team_leave",
    SPECIAL_EVENT_START = "special_event_start",
    SPECIAL_EVENT_END = "special_event_end",
    EXECUTING_COMMAND = "executing_command",
    SERVER_READY = "server_ready",
    ERROR = "error"
}
export declare enum QuickChat {
    COMBAT_WereUnderAttack = "d11_quick_chat_combat_slot_0",
    COMBAT_Retreat = "d11_quick_chat_combat_slot_1",
    COMBAT_MoveOut = "d11_quick_chat_combat_slot_2",
    COMBAT_DontShoot = "d11_quick_chat_combat_slot_3",
    COMBAT_BeCareful = "d11_quick_chat_combat_slot_4",
    COMBAT_TheyreBetterArmed = "d11_quick_chat_combat_slot_5",
    COMBAT_ImOutOfAmmo = "d11_quick_chat_combat_slot_6",
    COMBAT_ImHurt = "d11_quick_chat_combat_slot_7",
    BUILDING_UpgradeWalls = "d11_quick_chat_building_slot_0",
    BUILDING_NeedBeds = "d11_quick_chat_building_slot_1",
    BUILDING_NeedBuildingPermission = "d11_quick_chat_building_slot_2",
    BUILDING_WhatsDoorCode = "d11_quick_chat_building_slot_3",
    BUILDING_CanIHaveKey = "d11_quick_chat_building_slot_4",
    BUILDING_NeedBetterDoor = "d11_quick_chat_building_slot_5",
    BUILDING_UpkeepRunningLow = "d11_quick_chat_building_slot_6",
    BUILDING_WhichChestFreeGame = "d11_quick_chat_building_slot_7",
    ACTIVITIES_GoingForStone = "d11_quick_chat_activities_phrase_format d11_Stone",
    ACTIVITIES_GoingForWood = "d11_quick_chat_activities_phrase_format d11_Wood",
    ACTIVITIES_GoingForMetal = "d11_quick_chat_activities_phrase_format d11_Metal",
    ACTIVITIES_GoingForFood = "d11_quick_chat_activities_phrase_format d11_Food",
    ACTIVITIES_GoingForWater = "d11_quick_chat_activities_phrase_format d11_Water",
    ACTIVITIES_GoingForScrap = "d11_quick_chat_activities_phrase_format d11_Scrap",
    ACTIVITIES_GoingForMetalFragments = "d11_quick_chat_activities_phrase_format d11_Metal_Fragments",
    ACTIVITIES_GoingForMedicine = "d11_quick_chat_activities_phrase_format d11_Medicine",
    QUESTIONS_AreYouFriendly = "d11_quick_chat_questions_slot_0",
    QUESTIONS_CanIBuildAroundHere = "d11_quick_chat_questions_slot_1",
    QUESTIONS_DoYouWantToTeamUp = "d11_quick_chat_questions_slot_2",
    QUESTIONS_DoYouNeedAnything = "d11_quick_chat_questions_slot_3",
    QUESTIONS_CouldYouHelpMe = "d11_quick_chat_questions_slot_4",
    QUESTIONS_WantToTrade = "d11_quick_chat_questions_slot_5",
    QUESTIONS_WhosThere = "d11_quick_chat_questions_slot_6",
    QUESTIONS_CanIEnter = "d11_quick_chat_questions_slot_7",
    RESPONSES_Yes = "d11_quick_chat_responses_slot_0",
    RESPONSES_No = "d11_quick_chat_responses_slot_1",
    RESPONSES_OK = "d11_quick_chat_responses_slot_2",
    RESPONSES_ThankYou = "d11_quick_chat_responses_slot_3",
    RESPONSES_NoProblem = "d11_quick_chat_responses_slot_4",
    RESPONSES_Hello = "d11_quick_chat_responses_slot_5",
    RESPONSES_Goodbye = "d11_quick_chat_responses_slot_6",
    RESPONSES_ImSorry = "d11_quick_chat_responses_slot_7",
    ORDERS_FollowMe = "d11_quick_chat_orders_slot_0",
    ORDERS_GoAway = "d11_quick_chat_orders_slot_1",
    ORDERS_RepairThis = "d11_quick_chat_orders_slot_2",
    ORDERS_WaitHere = "d11_quick_chat_orders_slot_3",
    ORDERS_ComeIn = "d11_quick_chat_orders_slot_4",
    ORDERS_LetsGo = "d11_quick_chat_orders_slot_5",
    ORDERS_HereTakeThis = "d11_quick_chat_orders_slot_6",
    ORDERS_HurryUp = "d11_quick_chat_orders_slot_7",
    LOCATION_North = "d11_quick_chat_location_slot_0",
    LOCATION_NorthEast = "d11_quick_chat_location_slot_1",
    LOCATION_East = "d11_quick_chat_location_slot_2",
    LOCATION_SouthEast = "d11_quick_chat_location_slot_3",
    LOCATION_South = "d11_quick_chat_location_slot_4",
    LOCATION_SouthWest = "d11_quick_chat_location_slot_5",
    LOCATION_West = "d11_quick_chat_location_slot_6",
    LOCATION_NorthWest = "d11_quick_chat_location_slot_7",
    NEED_Scrap = "d11_quick_chat_i_need_phrase_format d11_Scrap",
    NEED_LowGradeFuel = "d11_quick_chat_i_need_phrase_format lowgradefuel",
    NEED_Food = "d11_quick_chat_i_need_phrase_format d11_Food",
    NEED_Water = "d11_quick_chat_i_need_phrase_format d11_Water",
    NEED_Wood = "d11_quick_chat_i_need_phrase_format d11_Wood",
    NEED_Stone = "d11_quick_chat_i_need_phrase_format stones",
    NEED_MetalFragments = "d11_quick_chat_i_need_phrase_format d11_Metal_Fragments",
    NEED_HighQualityMetal = "d11_quick_chat_i_need_phrase_format metal.refined",
    HAVE_Scrap = "d11_quick_chat_i_have_phrase_format d11_Scrap",
    HAVE_LowGradeFuel = "d11_quick_chat_i_have_phrase_format lowgradefuel",
    HAVE_Food = "d11_quick_chat_i_have_phrase_format d11_Food",
    HAVE_Water = "d11_quick_chat_i_have_phrase_format d11_Water",
    HAVE_HuntingBow = "d11_quick_chat_i_have_phrase_format bow.hunting",
    HAVE_Pickaxe = "d11_quick_chat_i_have_phrase_format pickaxe",
    HAVE_Hatchet = "d11_quick_chat_i_have_phrase_format hatchet",
    HAVE_HighQualityMetal = "d11_quick_chat_i_have_phrase_format metal.refined"
}
export declare const EVENTS: {
    event_airdrop: {
        name: string;
        special: boolean;
    };
    event_cargoship: {
        name: string;
        special: boolean;
    };
    event_cargoheli: {
        name: string;
        special: boolean;
    };
    event_helicopter: {
        name: string;
        special: boolean;
    };
    event_halloween: {
        name: string;
        special: boolean;
    };
    event_xmas: {
        name: string;
        special: boolean;
    };
    event_easter: {
        name: string;
        special: boolean;
    };
};
