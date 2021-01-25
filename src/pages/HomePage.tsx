import { Button, Column, Grid, ListItem, Row, UnorderedList } from "carbon-components-react";
import { useState } from "react";
import AboutDiv from "../components/AboutDiv";
import CenterTitle from "../components/CenterTitle";
import DeckList from "../components/DeckList";
import DecksTable from "../components/DecksTable";
import SpacedDiv from "../components/SpacedDiv";

export default function HomePage() {

    const [decks, setDecks] = useState([]);

    return <SpacedDiv>
        <Grid>
            <Row>
                <Column>
                    <AboutDiv>
                        <CenterTitle>The best place to get an overview of your deck</CenterTitle>
                        <br />
                        <h4>To do this overview:</h4>
                        <UnorderedList style={{marginLeft: 20}}>
                            <ListItem>Click on <strong>GET OVERVIEW</strong></ListItem>
                            <ListItem>Add all cards of your deck</ListItem>
                            <ListItem>Click on <strong>SUBMIT</strong></ListItem>
                            <ListItem>Receive the overview and make the properly changes on your deck</ListItem>
                        </UnorderedList>
                        <br />
                        <p>If you already created a deck, you can edit by clicking on it</p>
                        <Button className="full-button" >
                            GET OVERVIEW
                        </Button>
                    </AboutDiv>    
                </Column>
                <Column>
                    <DeckList>
                        <CenterTitle>Decks ({decks.length})</CenterTitle>
                        {/* <DecksTable table={decks}/> */}
                    </DeckList>
                </Column>
            </Row>
        </Grid>
        </SpacedDiv>
}