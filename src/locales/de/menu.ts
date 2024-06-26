import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "Abbrechen",
  "continue": "Fortfahren",
  "dailyRun": "Täglicher Run (Beta)",
  "loadGame": "Spiel laden",
  "newGame": "Neues Spiel",
  "settings": "Einstellungen",
  "selectGameMode": "Wähle einen Spielmodus",
  "logInOrCreateAccount": "Melde dich an oder erstelle einen Account zum starten. Keine Email nötig!",
  "username": "Benutzername",
  "password": "Passwort",
  "login": "Anmelden",
  "register": "Registrieren",
  "emptyUsername": "Benutzername darf nicht leer sein.",
  "invalidLoginUsername": "Der eingegebene Benutzername ist ungültig.",
  "invalidRegisterUsername": "Benutzername darf nur Buchstaben, Zahlen oder Unterstriche enthalten.",
  "invalidLoginPassword": "Das eingegebene Passwort ist ungültig.",
  "invalidRegisterPassword": "Passwort muss 6 Zeichen oder länger sein.",
  "usernameAlreadyUsed": "Der eingegebene Benutzername wird bereits verwendet.",
  "accountNonExistent": "Der eingegebene Benutzer existiert nicht.",
  "unmatchingPassword": "Das eingegebene Passwort stimmt nicht überein.",
  "passwordNotMatchingConfirmPassword": "Passwort muss mit Bestätigungspasswort übereinstimmen.",
  "confirmPassword": "Bestätige Passwort",
  "registrationAgeWarning": "Mit der Registrierung bestätigen Sie, dass Sie 13 Jahre oder älter sind.",
  "backToLogin": "Zurück zur Anmeldung",
  "failedToLoadSaveData": "Speicherdaten konnten nicht geladen werden. Bitte laden Sie die Seite neu.\nÜberprüfe den #announcements-Kanal im Discord bei anhaltenden Problemen.",
  "sessionSuccess": "Sitzung erfolgreich geladen.",
  "failedToLoadSession": "Ihre Sitzungsdaten konnten nicht geladen werden.\nSie könnten beschädigt sein.",
  "boyOrGirl": "Bist du ein Junge oder ein Mädchen?",
  "boy": "Junge",
  "girl": "Mädchen",
  "evolving": "Nanu?\n{{pokemonName}} entwickelt sich!",
  "stoppedEvolving": "Hm? {{pokemonName}} hat die Entwicklung \nabgebrochen.", // "Hm? Entwicklung wurde abgebrochen!" without naming the pokemon seems to be the original.
  "pauseEvolutionsQuestion": "Die Entwicklung von {{pokemonName}} vorübergehend pausieren?\nEntwicklungen können im Gruppenmenü wieder aktiviert werden.",
  "evolutionsPaused": "Entwicklung von {{pokemonName}} pausiert.",
  "evolutionDone": "Glückwunsch!\nDein {{pokemonName}} entwickelte sich zu {{evolvedPokemonName}}!",
  "dailyRankings": "Tägliche Rangliste",
  "weeklyRankings": "Wöchentliche Rangliste",
  "noRankings": "Keine Rangliste",
  "positionIcon": "#",
  "usernameScoreboard": "Benutzername",
  "score": "Punkte",
  "wave": "Welle",
  "loading": "Lade…",
  "loadingAsset": "Loading asset: {{assetName}}",
  "playersOnline": "Spieler Online",
  "yes":"Ja",
  "no":"Nein",
  "disclaimer": "DISCLAIMER",
  "disclaimerDescription": "Dieses Spiel ist ein unfertiges Produkt. Es kann spielbeinträchtigende Fehler (bis hin zum Verlust des Speicherstandes) aufweisen, sich ohne Vorankündigung ändern und es gibt keine Garantie dass es weiterentwickelt oder fertiggestellt wird.",
  "general": "Allgemein",
  "display": "Anzeige",
  "audio": "Audio",
  "gamepad": "Controller",
  "keyboard": "Tastatur",
  "gameSpeed": "Spielgeschwindigkeit",
  "hpBarSpeed": "KP-Balken Geschwindigkeit",
  "expGainsSpeed": "EXP-Balken Geschwindigkeit",
  "expPartyDisplay": "Team-EXP anzeigen",
  "skipSeenDialogues": "Gesehenen Dialog überspringen",
  "battleStyle": "Kampfstil",
  "enableRetries": "Erneut versuchen aktivieren",
  "tutorials": "Tutorials",
  "touchControls": "Touch Steuerung",
  "vibrations": "Vibration",
  "normal": "Normal",
  "fast": "Schnell",
  "faster": "Schneller",
  "skip": "Überspringen",
  "levelUpNotifications": "Auflevelbenachrichtigung",
  "on": "An",
  "off": "Aus",
  "switch": "Wechsel",
  "set": "Folge",
  "auto": "Auto",
  "disabled": "Deaktiviert",
  "language": "Sprache",
  "change": "Ändern",
  "uiTheme": "UI Thema",
  "default": "Standard",
  "legacy": "Legacy",
  "windowType": "Fenster Typ",
  "moneyFormat": "Währungsformat",
  "damageNumbers": "Schadensnummern",
  "simple": "Simpel",
  "fancy": "Schön",
  "abbreviated": "Abgekürzt",
  "moveAnimations": "Attacken Animationen",
  "showStatsOnLevelUp": "Werte beim Aufleveln anzeigen",
  "candyUpgradeNotification": "Bonbon Upgrade Benachrichtigung",
  "passivesOnly": "Nur Passive",
  "candyUpgradeDisplay": "Bonbon Upgrade Anzeige",
  "icon": "Icon",
  "animation": "Animation",
  "moveInfo": "Attacken-Info",
  "showMovesetFlyout": "Zeige Attacken Flyout",
  "showArenaFlyout": "Zeige Arena Flyout",
  "showTimeOfDayWidget": "Zeige Tageszeit Widget",
  "timeOfDayAnimation": "Tageszeit Animation",
  "bounce": "Springen",
  "back": "Zurück",
  "spriteSet": "Sprite Satz",
  "consistent": "Konistent",
  "mixedAnimated": "Gemischt animiert",
  "fusionPaletteSwaps": "Fusion-Farbpalettenwechsel",
  "playerGender": "Spieler Geschlecht",
  "typeHints": "Typhinweise",
  "masterVolume": "Gesamtlautstärke",
  "bgmVolume": "Hintergrundmusik",
  "seVolume": "Spezialeffekte",
  "musicPreference": "Musik Präferenz",
  "mixed": "Gemisch",
  "gamepadPleasePlug": "Bitte einen Controller anschließen oder eine Taste drücken",
  "delete": "Löschen",
  "keyboardPleasePress": "Bitte eine Taste auf der Tastatur drücken",
  "reset": "Zurücksetzen",
  "requireReload": "Neuladen benötigt",
  "action": "Aktion",
  "pressToBind": "Zum Zuweisen drücken",
  "pressButton": "Eine Taste drücken...",
  "buttonUp": "Hoch",
  "buttonDown": "Runter",
  "altButtonUp": "Hoch (Alt)",
  "buttonLeft": "Links",
  "buttonRight": "Rechts",
  "buttonAction": "Aktion",
  "buttonMenu": "Menü",
  "buttonSubmit": "Bestätigen",
  "altButtonDown": "Runter (Alt)",
  "altButtonLeft": "Links (Alt)",
  "altButtonRight": "Rechts (Alt)",
  "altButtonAction": "Aktion (Alt)",
  "buttonCancel": "Abbrechen",
  "altButtonCancel": "Abbrechen (Alt)",
  "altButtonMenu": "Menü (Alt)",
  "buttonStats": "Statistiken",
  "altButtonStats": "Statistiken (Alt)",
  "buttonCycleForm": "Form wechseln",
  "altButtonCycleForm": "Form wechseln (Alt)",
  "buttonCycleShiny": "Schillernd wechseln",
  "altButtonCycleShiny": "Schillernd wechseln (Alt)",
  "buttonCycleGender": "Geschlecht wechseln",
  "altButtonCycleGender": "Geschlecht wechseln (Alt)",
  "buttonCycleAbility": "Fähigkeit wechseln",
  "altButtonCycleAbility": "Fähigkeit wechseln (Alt)",
  "buttonCycleNature": "Wesen wechseln",
  "altButtonCycleNature": "Wesen wechslen (Alt)",
  "buttonCycleVariant": "Variante wechseln",
  "altButtonCycleVariant": "Variante wechseln (Alt)",
  "buttonSpeedUp": "Beschleunigen",
  "altButtonSpeedUp": "Beschleunigen (Alt)",
  "buttonSlowDown": "Verlangsamen",
  "altButtonSlowDown": "Verlangsamen (Alt)",
  "altButtonSubmit": "Bestätigen (Alt)",
} as const;
