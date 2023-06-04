import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const BugTrackerCard = ({title,desc,image,link}) => (
  <Card css={{ w: "100%", h: "360px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, left: 5}}>
      <Col className="">
        <Text size={12} weight="bold" transform="uppercase" color="#293B57">
          Featured Project
        </Text>
        <Text h3 color="black" className="text-4xl font-bold">
          Manage
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/BugTracker-banner-2.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row alignItems="center">
        <Col >
          <Text color="#000" size={12}>
            Exceptional landing page built for the folks over at Manage.
          </Text>
          <Text color="#000" size={12}>
            
          </Text>
        </Col>
        <Col >
          <Row  justify="flex-end">
            <Button flat auto rounded color="secondary" css={{ m:8 }} >
              <Text
                css={{ color: "inherit"}}
                size={12}
                weight="bold"
                transform="uppercase"
                
              >
                View Repo
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);