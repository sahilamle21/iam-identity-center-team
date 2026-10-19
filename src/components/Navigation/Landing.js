// © 2023 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
// This AWS Content is provided subject to the terms of the AWS Customer Agreement available at
// http://aws.amazon.com/agreement or other written agreement between Customer and either
// Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.
import { React, useState } from "react";
import Box from "@awsui/components-react/box";
import { useHistory } from "react-router-dom";
import Button from "@awsui/components-react/button";
import Container from "@awsui/components-react/container";
import FormField from "@awsui/components-react/form-field";
import Grid from "@awsui/components-react/grid";
import SpaceBetween from "@awsui/components-react/space-between";
// import Link from "@awsui/components-react/link";
import Select from "@awsui/components-react/select";
import "../../media/landing-page.css";

const selections = [
  { id: "1", label: "Create TEAM request" },
  { id: "2", label: "Approve TEAM request" },
];

function Landing(props) {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(selections[0]);
  return (
    <Box margin={{ bottom: "l" }}>
      <div className="custom-home__header">
        <Box
        // padding={{ vertical: "xxxl", horizontal: "xxxl" }}
        // margin={{ bottom: "xxl" }}
        >
          <Grid
            gridDefinition={[
              { offset: { l: 2, xxs: 1 }, colspan: { l: 8, xxs: 10 } },
              {
                colspan: { xl: 6, l: 5, s: 6, xxs: 10 },
                offset: { l: 2, xxs: 1 },
              },
              {
                colspan: { xl: 2, l: 3, s: 4, xxs: 10 },
                offset: { s: 0, xxs: 1 },
              },
            ]}
          >
            <Box fontWeight="light" padding={{ top: "xs" }}>
              <span className="custom-home__category">
                Identity &amp; Access Management
              </span>
            </Box>
            <div className="custom-home__header-title">
              <Box
                variant="h1"
                fontWeight="light"
                padding="n"
                fontSize="heading-xl"
                color="inherit"
              >
                IAM Identity Center
              </Box>
              <Box
                fontWeight="normal"
                padding={{ bottom: "s" }}
                fontSize="display-l"
                color="inherit"
              >
                Temporary Elevated Access Management
              </Box>
              <Box variant="p" fontWeight="light">
                <span className="custom-home__header-sub-title">
                  Temporary Elevated Access Management (TEAM) is an automated,
                  approval-based workflow for managing time-bound elevated
                  access to your AWS environment
                </span>
              </Box>
            </div>
            <div className="custom-home__header-cta">
              <Container margin={{ left: "xxl" }}>
                <SpaceBetween size="xl">
                  <Box variant="h2" padding="n">
                    TEAM Requests
                  </Box>
                  <FormField stretch={true} label="Actions">
                    <Select
                      selectedAriaLabel="Selected"
                      options={selections}
                      selectedOption={selectedOption}
                      ariaRequired={true}
                      onChange={(e) =>
                        setSelectedOption(e.detail.selectedOption)
                      }
                    />
                  </FormField>
                  <Button
                    href="#"
                    variant="primary"
                    onClick={() => {
                      if (selectedOption.id === "1") {
                        history.push("/requests/request");
                      } else if (selectedOption.id === "2") {
                        history.push("/approvals/approve");
                      }
                      props.setActiveHref("/sessions/active")
                    }}
                  >
                    Next steps
                  </Button>
                </SpaceBetween>
              </Container>
            </div>
          </Grid>
        </Box>
      </div>

    </Box>
  );
}
export default Landing;
