import React, { Component } from 'react';
import HomeTrailTile from './HomeTrailTile';
import imgTrailJoffreLakes from './assets/img/joffrelakes.jpg';
import imgTrailJugIsland from './assets/img/jugisland.jpg';
import imgTrailStMarks from './assets/img/stmarks.jpg';
import imgTrailWhytecliffPark from './assets/img/whytecliff.jpg';

class Home extends Component {
  render() {
    return (
      <section>
        <HomeTrailTile
          img={imgTrailStMarks}
          title="St. Mark's Summit"
          blurb="St. Mark's Summit is part of the Howe Sound Crest Trail that spans over 30km from Cypress to a point along the Sea to Sky Highway near Porteau Cove."
          difficulty="Medium"
          duration="5"
          length="11"
        />
        <HomeTrailTile
          imgRight
          img={imgTrailJugIsland}
          title="Jug Island Beach"
          blurb="Jug Island is a tiny gorgeous island located just off the northern tip of Belcarra Regional Park."
          difficulty="Medium"
          duration="2.5"
          length="5.5"
        />
        <HomeTrailTile
          img={imgTrailJoffreLakes}
          title="Joffre Lakes"
          blurb="Joffre Lakes is one of BC's most beautiful hikes and is relatively easy to access compared to other alpine lakes."
          difficulty="Medium"
          duration="5"
          length="11"
        />
        <HomeTrailTile
          imgRight
          img={imgTrailWhytecliffPark}
          title="Whytecliff Park"
          blurb="Situated in the rugged coastline along the shores of Howe Sound in West Vancouver, the scenic mountains and passing boats..."
          difficulty="Easy"
          duration="1.5"
          length="2"
        />
      </section>
    );
  }
}

export default Home;
