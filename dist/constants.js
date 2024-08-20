"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = exports.QuickChat = exports.RCEEvent = exports.LogLevel = exports.GPORTALWebsocketTypes = exports.GPORTALRoutes = void 0;
var GPORTALRoutes;
(function (GPORTALRoutes) {
    GPORTALRoutes["COMMAND"] = "https://www.g-portal.com/ngpapi/";
    GPORTALRoutes["REFRESH"] = "https://auth.g-portal.com/auth/realms/master/protocol/openid-connect/token";
    GPORTALRoutes["WEBSOCKET"] = "wss://www.g-portal.com/ngpapi/";
    GPORTALRoutes["ORIGIN"] = "https://www.g-portal.com";
    GPORTALRoutes["HOME"] = "https://www.g-portal.com/en";
})(GPORTALRoutes || (exports.GPORTALRoutes = GPORTALRoutes = {}));
var GPORTALWebsocketTypes;
(function (GPORTALWebsocketTypes) {
    GPORTALWebsocketTypes["INIT"] = "connection_init";
    GPORTALWebsocketTypes["START"] = "start";
})(GPORTALWebsocketTypes || (exports.GPORTALWebsocketTypes = GPORTALWebsocketTypes = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
var RCEEvent;
(function (RCEEvent) {
    RCEEvent["CONNECTED"] = "connected";
    RCEEvent["MESSAGE"] = "message";
    RCEEvent["PLAYER_KILL"] = "player_kill";
    RCEEvent["PLAYER_JOINED"] = "player_joined";
    RCEEvent["PLAYER_RESPAWNED"] = "player_respawned";
    RCEEvent["PLAYER_SUICIDE"] = "player_suicide";
    RCEEvent["PLAYER_ROLE_ADD"] = "player_role_add";
    RCEEvent["QUICK_CHAT"] = "quick_chat";
    RCEEvent["NOTE_EDIT"] = "note_edit";
    RCEEvent["EVENT_START"] = "event_start";
    RCEEvent["PLAYERLIST_UPDATE"] = "playerlist_update";
    RCEEvent["ITEM_SPAWN"] = "item_spawn";
    RCEEvent["VENDING_MACHINE_NAME"] = "vending_machine_name";
    RCEEvent["KIT_SPAWN"] = "kit_spawn";
    RCEEvent["KIT_GIVE"] = "kit_give";
    RCEEvent["TEAM_CREATE"] = "team_create";
    RCEEvent["TEAM_JOIN"] = "team_join";
    RCEEvent["TEAM_LEAVE"] = "team_leave";
    RCEEvent["SPECIAL_EVENT_START"] = "special_event_start";
    RCEEvent["SPECIAL_EVENT_END"] = "special_event_end";
    RCEEvent["EXECUTING_COMMAND"] = "executing_command";
    RCEEvent["SERVER_READY"] = "server_ready";
    RCEEvent["ERROR"] = "error";
})(RCEEvent || (exports.RCEEvent = RCEEvent = {}));
var QuickChat;
(function (QuickChat) {
    QuickChat["COMBAT_WereUnderAttack"] = "d11_quick_chat_combat_slot_0";
    QuickChat["COMBAT_Retreat"] = "d11_quick_chat_combat_slot_1";
    QuickChat["COMBAT_MoveOut"] = "d11_quick_chat_combat_slot_2";
    QuickChat["COMBAT_DontShoot"] = "d11_quick_chat_combat_slot_3";
    QuickChat["COMBAT_BeCareful"] = "d11_quick_chat_combat_slot_4";
    QuickChat["COMBAT_TheyreBetterArmed"] = "d11_quick_chat_combat_slot_5";
    QuickChat["COMBAT_ImOutOfAmmo"] = "d11_quick_chat_combat_slot_6";
    QuickChat["COMBAT_ImHurt"] = "d11_quick_chat_combat_slot_7";
    QuickChat["BUILDING_UpgradeWalls"] = "d11_quick_chat_building_slot_0";
    QuickChat["BUILDING_NeedBeds"] = "d11_quick_chat_building_slot_1";
    QuickChat["BUILDING_NeedBuildingPermission"] = "d11_quick_chat_building_slot_2";
    QuickChat["BUILDING_WhatsDoorCode"] = "d11_quick_chat_building_slot_3";
    QuickChat["BUILDING_CanIHaveKey"] = "d11_quick_chat_building_slot_4";
    QuickChat["BUILDING_NeedBetterDoor"] = "d11_quick_chat_building_slot_5";
    QuickChat["BUILDING_UpkeepRunningLow"] = "d11_quick_chat_building_slot_6";
    QuickChat["BUILDING_WhichChestFreeGame"] = "d11_quick_chat_building_slot_7";
    QuickChat["ACTIVITIES_GoingForStone"] = "d11_quick_chat_activities_phrase_format d11_Stone";
    QuickChat["ACTIVITIES_GoingForWood"] = "d11_quick_chat_activities_phrase_format d11_Wood";
    QuickChat["ACTIVITIES_GoingForMetal"] = "d11_quick_chat_activities_phrase_format d11_Metal";
    QuickChat["ACTIVITIES_GoingForFood"] = "d11_quick_chat_activities_phrase_format d11_Food";
    QuickChat["ACTIVITIES_GoingForWater"] = "d11_quick_chat_activities_phrase_format d11_Water";
    QuickChat["ACTIVITIES_GoingForScrap"] = "d11_quick_chat_activities_phrase_format d11_Scrap";
    QuickChat["ACTIVITIES_GoingForMetalFragments"] = "d11_quick_chat_activities_phrase_format d11_Metal_Fragments";
    QuickChat["ACTIVITIES_GoingForMedicine"] = "d11_quick_chat_activities_phrase_format d11_Medicine";
    QuickChat["QUESTIONS_AreYouFriendly"] = "d11_quick_chat_questions_slot_0";
    QuickChat["QUESTIONS_CanIBuildAroundHere"] = "d11_quick_chat_questions_slot_1";
    QuickChat["QUESTIONS_DoYouWantToTeamUp"] = "d11_quick_chat_questions_slot_2";
    QuickChat["QUESTIONS_DoYouNeedAnything"] = "d11_quick_chat_questions_slot_3";
    QuickChat["QUESTIONS_CouldYouHelpMe"] = "d11_quick_chat_questions_slot_4";
    QuickChat["QUESTIONS_WantToTrade"] = "d11_quick_chat_questions_slot_5";
    QuickChat["QUESTIONS_WhosThere"] = "d11_quick_chat_questions_slot_6";
    QuickChat["QUESTIONS_CanIEnter"] = "d11_quick_chat_questions_slot_7";
    QuickChat["RESPONSES_Yes"] = "d11_quick_chat_responses_slot_0";
    QuickChat["RESPONSES_No"] = "d11_quick_chat_responses_slot_1";
    QuickChat["RESPONSES_OK"] = "d11_quick_chat_responses_slot_2";
    QuickChat["RESPONSES_ThankYou"] = "d11_quick_chat_responses_slot_3";
    QuickChat["RESPONSES_NoProblem"] = "d11_quick_chat_responses_slot_4";
    QuickChat["RESPONSES_Hello"] = "d11_quick_chat_responses_slot_5";
    QuickChat["RESPONSES_Goodbye"] = "d11_quick_chat_responses_slot_6";
    QuickChat["RESPONSES_ImSorry"] = "d11_quick_chat_responses_slot_7";
    QuickChat["ORDERS_FollowMe"] = "d11_quick_chat_orders_slot_0";
    QuickChat["ORDERS_GoAway"] = "d11_quick_chat_orders_slot_1";
    QuickChat["ORDERS_RepairThis"] = "d11_quick_chat_orders_slot_2";
    QuickChat["ORDERS_WaitHere"] = "d11_quick_chat_orders_slot_3";
    QuickChat["ORDERS_ComeIn"] = "d11_quick_chat_orders_slot_4";
    QuickChat["ORDERS_LetsGo"] = "d11_quick_chat_orders_slot_5";
    QuickChat["ORDERS_HereTakeThis"] = "d11_quick_chat_orders_slot_6";
    QuickChat["ORDERS_HurryUp"] = "d11_quick_chat_orders_slot_7";
    QuickChat["LOCATION_North"] = "d11_quick_chat_location_slot_0";
    QuickChat["LOCATION_NorthEast"] = "d11_quick_chat_location_slot_1";
    QuickChat["LOCATION_East"] = "d11_quick_chat_location_slot_2";
    QuickChat["LOCATION_SouthEast"] = "d11_quick_chat_location_slot_3";
    QuickChat["LOCATION_South"] = "d11_quick_chat_location_slot_4";
    QuickChat["LOCATION_SouthWest"] = "d11_quick_chat_location_slot_5";
    QuickChat["LOCATION_West"] = "d11_quick_chat_location_slot_6";
    QuickChat["LOCATION_NorthWest"] = "d11_quick_chat_location_slot_7";
    QuickChat["NEED_Scrap"] = "d11_quick_chat_i_need_phrase_format d11_Scrap";
    QuickChat["NEED_LowGradeFuel"] = "d11_quick_chat_i_need_phrase_format lowgradefuel";
    QuickChat["NEED_Food"] = "d11_quick_chat_i_need_phrase_format d11_Food";
    QuickChat["NEED_Water"] = "d11_quick_chat_i_need_phrase_format d11_Water";
    QuickChat["NEED_Wood"] = "d11_quick_chat_i_need_phrase_format d11_Wood";
    QuickChat["NEED_Stone"] = "d11_quick_chat_i_need_phrase_format stones";
    QuickChat["NEED_MetalFragments"] = "d11_quick_chat_i_need_phrase_format d11_Metal_Fragments";
    QuickChat["NEED_HighQualityMetal"] = "d11_quick_chat_i_need_phrase_format metal.refined";
    QuickChat["HAVE_Scrap"] = "d11_quick_chat_i_have_phrase_format d11_Scrap";
    QuickChat["HAVE_LowGradeFuel"] = "d11_quick_chat_i_have_phrase_format lowgradefuel";
    QuickChat["HAVE_Food"] = "d11_quick_chat_i_have_phrase_format d11_Food";
    QuickChat["HAVE_Water"] = "d11_quick_chat_i_have_phrase_format d11_Water";
    QuickChat["HAVE_HuntingBow"] = "d11_quick_chat_i_have_phrase_format bow.hunting";
    QuickChat["HAVE_Pickaxe"] = "d11_quick_chat_i_have_phrase_format pickaxe";
    QuickChat["HAVE_Hatchet"] = "d11_quick_chat_i_have_phrase_format hatchet";
    QuickChat["HAVE_HighQualityMetal"] = "d11_quick_chat_i_have_phrase_format metal.refined";
})(QuickChat || (exports.QuickChat = QuickChat = {}));
exports.EVENTS = {
    event_airdrop: {
        name: "Airdrop",
        special: false,
    },
    event_cargoship: {
        name: "Cargo Ship",
        special: false,
    },
    event_cargoheli: {
        name: "Chinook",
        special: false,
    },
    event_helicopter: {
        name: "Patrol Helicopter",
        special: false,
    },
    event_halloween: {
        name: "Halloween",
        special: true,
    },
    event_xmas: {
        name: "Christmas",
        special: true,
    },
    event_easter: {
        name: "Easter",
        special: true,
    },
};
//# sourceMappingURL=constants.js.map