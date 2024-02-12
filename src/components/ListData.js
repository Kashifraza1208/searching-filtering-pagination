import { Button, Image } from "react-bootstrap";
import "./ListData.css";
import Card from "react-bootstrap/Card";

function ListData({ data }) {
  console.log(data);
  return (
    <div
      className="listData"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "50px",
      }}
    >
      {data &&
        data?.map((item) => {
          return (
            <Card
              className="list-class"
              style={{
                width: "18rem",
                display: "flex",
                marginBottom: "20px",
                flexWrap: "wrap",
                fontSize: "12px",
              }}
              key={item.id}
            >
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle>{item.category}</Card.Subtitle>
                  <Card.Subtitle>{item.price}</Card.Subtitle>

                  {/* <Button variant="success" style={{ width: "80px" }}>
                    Add
                  </Button> */}
                </div>
                <Image
                  style={{
                    display: "flex",
                    width: "200px",
                    borderRadius: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  src={item.img}
                />
                <Card.Text wrap="soft">{item.desc}</Card.Text>
                <Button variant="danger">Delete</Button>
                <Button variant="primary" style={{ float: "right" }}>
                  Update
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      ;
    </div>
  );
}

export default ListData;
