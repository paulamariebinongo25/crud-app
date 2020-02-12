import React, { useState, useEffect } from "react";

import itunes from "../../images/itunes.png";
import myspace from "../../images/myspace.png";
import world from "../../images/worldMap.png";

const UserProfile = () => {
  const [profileUsers, setProfileUsers] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.soundcloud.com/users/3207/followings?client_id=f0sxU3Az3dcl0lS1M9wFJ00SqawVL72n"
    );
    const profileUsers = await response.json();
    setProfileUsers(profileUsers.collection);
    // console.log(profileUsers.collection);
  }, []);
  return (
    <div class="column">
      {profileUsers.map(collection => (
        <div class="box">
          <div class="level">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src={collection.avatar_url} />
                    </figure>
                  </div>
                  <div class="media-content is-clipped">
                    <p class="title is-5">{collection.full_name}</p>
                    <p class="subtitle is-6">@{collection.username}</p>
                  </div>
                </div>
                <div class="level is-block">
                  <div class="content">
                    <div class="title is-5">First Name:</div>
                    <div class="subtitle is-6">{collection.first_name}</div>

                    <div class="title is-5">Last Name:</div>
                    <div class="subtitle is-6">{collection.last_name}</div>
                    <div class="title is-5">City/Country:</div>
                    <div class="subtitle is-6">
                      {collection.city},<span> {collection.country}</span>
                    </div>

                    <div class="title is-5">Last Name:</div>
                    <div class="subtitle is-6">{collection.last_name}</div>
                  </div>

                  <div class="content">
                    <div class="container">
                      <div class="level is-mobile">
                        <div class="level-left">
                          <div class="level-item">
                            <div class="subtitle is-6">
                              <strong>Last Modified: </strong>
                              {collection.last_modified}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="container is-fluid">
                      <div class="level is-block is-marginless">
                        <div class="level is-mobile is-marginless">
                          <div className="level-item is-marginless">
                            <div class="card-content">
                              <div class="title is-6">
                                Followers:
                                <span> {collection.followers_count}</span>
                              </div>
                            </div>
                            <div class="card-content">
                              <div class="title is-6">
                                Followings:
                                <span> {collection.followings_count}</span>
                              </div>
                            </div>
                            <div class="card-content">
                              <div class="title is-6">
                                Public Counts:
                                <span> {collection.public_counts}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="level is-mobile is-marginless">
                          <div class="level-item is-marginless">
                            <div class="card-content">
                              <div class="title is-6">
                                Tracks:
                                <span> {collection.track_count}</span>
                              </div>
                            </div>
                            <div class="card-content">
                              <div class="title is-6">
                                Playlists:
                                <span> {collection.playlist_count}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section class="level is-block">
              <div class="level">
                <div class="level-right">
                  <div class="card-content">
                    <div class="box">
                      <div class="title is-5">Permalink:</div>
                      <div class="subtitle is-6">{collection.permalink}</div>
                      <div class="level is-block">
                        <div class="subtitle is-7">
                          {collection.permalink_url}
                          <div class="subtitle is-7">{collection.uri}</div>
                        </div>
                      </div>
                      <div class="level is-block">
                        <div class="title is-5">Plan:</div>
                        <div class="subtitle is-6">{collection.plan}</div>
                      </div>

                      <div class="level is-block">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-64x64">
                              <img src={myspace} />
                            </figure>
                          </div>
                          <div class="media-content is-clipped">
                            <p class="title is-5">MySpace:</p>
                            <p class="subtitle is-6">{collection.myspace}</p>
                          </div>
                        </div>
                      </div>
                      <div class="level is-block">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-64x64">
                              <img src={itunes} />
                            </figure>
                          </div>
                          <div class="media-content is-clipped">
                            <p class="title is-5">Discogs:</p>
                            <p class="subtitle is-6">
                              {collection.discogs_name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="level is-block">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-64x64">
                              <img src={world} />
                            </figure>
                          </div>
                          <div class="media-content is-clipped">
                            <div class="level-block">
                              <p class="title is-5">Website:</p>
                              <p class="subtitle is-6">
                                {collection.website_title}
                              </p>
                              <div class="level-block">
                                <p class="text subtitle is-6">
                                  {collection.website}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
