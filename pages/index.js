import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from "../components/meetups/MeetupList";


function HomePage(props) {

    return (
    <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="browse a huge list of highly active React meetups"/>
        </Head>
        <MeetupList meetups={props.meetups}/>
    </Fragment>
    )
}

export async function getStaticProps() {
    //fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://luke0619s:slf200000@cluster0.gr8qeqp.mongodb.net/luke?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props:{
            meetups: meetups.map(meetup=> ({
                title: meetup.title,
                address:meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            })
            )
        },
        revalidate: 1,
}
}

export default HomePage;