import Container from "../Container";
import Adobe from "@/public/Adobe.png";
import AdobeGray from "@/public/AdobeGray.png";
import AirbnbGray from "@/public/AirbnbGray.png";
import Airbnb from "@/public/Airbnb.png";
import GoogleGray from "@/public/GoogleGray.png";
import Google from "@/public/Google.png";
import MicrosoftGray from "@/public/MicrosoftGray.png";
import Microsoft from "@/public/Microsoft.png";
import NetflixGray from "@/public/NetflixGray.png";
import Netflix from "@/public/Netflix.png";
import Slack from "@/public/Slack.png";
import SlackGray from "@/public/Slack-gray.png";
import CardPartner from "./CardPartner";

export default function PartnerProject() {
  return (
    <div className="w-full py-8 bg-gray-900 border-t">
      <Container>
        <div className="flex flex-wrap justify-between sm:flex-row">
          <CardPartner href="" color={Slack} gray={SlackGray} />
          <CardPartner href="" color={Google} gray={GoogleGray} />
          <CardPartner href="" color={Netflix} gray={NetflixGray} />
          <CardPartner href="" color={Airbnb} gray={AirbnbGray} />
          <CardPartner href="" color={Adobe} gray={AdobeGray} />
          <CardPartner href="" color={Microsoft} gray={MicrosoftGray} />
        </div>
      </Container>
    </div>
  );
}
