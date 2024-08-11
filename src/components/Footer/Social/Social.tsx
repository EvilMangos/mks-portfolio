import github from "../../../assets/icons/social/github.png";
import linkedin from "../../../assets/icons/social/linkedin.png";
import telegram from "../../../assets/icons/social/telegram.png";
import whatsapp from "../../../assets/icons/social/whatsapp.png";
import githubHover from "../../../assets/icons/social/hover/github_hover.png";
import linkedinHover from "../../../assets/icons/social/hover/linkedin_hover.png";
import telegramHover from "../../../assets/icons/social/hover/telegram_hover.png";
import whatsappHover from "../../../assets/icons/social/hover/whatsapp_hover.png";

import classes from "./Social.module.scss";
import SocialLink from "./SocialLink/SocialLink";

const Social = () => {
	return (
		<div className={classes.container}>
			<SocialLink link="https://github.com/EvilMangos" image={github} image_hover={githubHover} alt="GitHub"/>
			<SocialLink link="https://www.linkedin.com/in/maksym-khamets-9570871b8" image={linkedin} image_hover={linkedinHover} alt="LinkedIn"/>
			<SocialLink link="https://t.me/eeoat" image={telegram} image_hover={telegramHover} alt="Telegram"/>
			<SocialLink link="#" image={whatsapp} image_hover={whatsappHover} alt="WhatsApp"/>
		</div>
	);
};

export default Social;