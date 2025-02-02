import React from "react";

const TosConsent = () => {
  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
      By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
      and <a href="#">Privacy Policy</a>.
    </div>
  );
};

export default TosConsent;
