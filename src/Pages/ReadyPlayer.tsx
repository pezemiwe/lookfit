import {
  AssetUnlockedEvent,
  AvatarCreator,
  AvatarCreatorConfig,
  AvatarExportedEvent,
  UserAuthorizedEvent,
  UserSetEvent,
} from "@readyplayerme/react-avatar-creator";

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = {
  width: "100vw",
  height: "100vh",
  border: "none",
};

export default function ReadyPlayer() {
  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  const handleOnUserAuthorized = (event: UserAuthorizedEvent) => {
    console.log(`User authorized: ${event.data}`);
  };

  const handleAssetUnlocked = (event: AssetUnlockedEvent) => {
    console.log(`Asset unlocked is: ${event.data.assetId}`);
  };

  const handleOnUserSet = (event: UserSetEvent) => {
    console.log(`User ID is: ${event.data.id}`);
  };

  return (
    <div>
      <AvatarCreator
        config={config}
        style={style}
        subdomain="https://lookfit.readyplayer.me?frameApi"
        onAvatarExported={handleOnAvatarExported}
        onUserAuthorized={handleOnUserAuthorized}
        onAssetUnlock={handleAssetUnlocked}
        onUserSet={handleOnUserSet}
      />
    </div>
  );
}
