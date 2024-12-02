import { BotIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const StartupAvatar = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <Avatar className="rounded-none aspect-square size-20">
      <AvatarImage src={imageUrl} />
      <AvatarFallback className="rounded-none">
        <BotIcon className="size-12" />
      </AvatarFallback>
    </Avatar>
  );
};

export default StartupAvatar;
