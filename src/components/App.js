import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Beautiful flowers");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //API

  return (
    // REMEMBER: "onVideoSelect" and onTermSubmit can be called ANYTHING
    // We simply call it the same as the actual name of the method due to conventions/ease of understanding
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   //optional! lecturer did this, in order to have a default search
//   //when the app loads. I don't see a need for it but here it is.

//   componentDidMount() {
//     this.onTermSubmit("Beautiful flowers");
//   }

//   //This call-back method is used called when the search bar
//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({ videos: response.data.items });
//     this.setState({ selectedVideo: response.data.items[0] });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       // REMEMBER: "onVideoSelect" and onTermSubmit can be called ANYTHING
//       // We simply call it the same as the actual name of the method due to conventions/ease of understanding
//       <div className="ui container">
//         <SearchBar onTermSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
