import React from "react";
import FeatureItem from "./FeatureItem";
import iconChat from "../../assets/img/icon-chat.webp";
import iconMoney from "../../assets/img/icon-money.webp";
import iconSecurity from "../../assets/img/icon-security.webp";

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem icon={iconChat} title="You are our #1 priority">
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </FeatureItem>
      <FeatureItem icon={iconMoney} title="More savings means higher rates">
        The more you save with us, the higher your interest rate will be!
      </FeatureItem>
      <FeatureItem icon={iconSecurity} title="Security you can trust">
        We use top of the line encryption to make sure your data and money is
        always safe.
      </FeatureItem>
    </section>
  );
};

export default Features;
