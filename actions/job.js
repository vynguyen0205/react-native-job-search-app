import axios from "axios";
import reverseGeoCode from "latlng-to-zip";
import qs from "qs";

import { FETCH_JOBS } from "./types";

//const JOB_ROOT_URL = "https://jobs.github.com/positions.json?";
// const JOB_QUERY_PARAM = {
//   publisher: "4201738803816157",
//   format: "json",
//   v: "2",
//   latlong: 1,
//   radius: 10,
//   q: "javascript"
// };

// const buildJobsUrl = zip => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAM, l: zip });
//   return `${JOB_ROOT_URL}${query}`;
// };

// export const fetchJobs = region => async dispatch => {
//   try {
//     let zip = await reverseGeoCode(region);
//     const url = buildJobsUrl(zip);

//     let { data } = await axios.get(url);
//     dispatch({ type: FETCH_JOBS, payload: data });
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }
// };
const GITHUB_BASE_URL = "https://jobs.github.com/positions.json?";

export const fetchJobs = ({ longitude, latitude }, callback) => async dispatch => {
  try {
    const url = `${GITHUB_BASE_URL}lat=${latitude}&long=${longitude}`;
    let { data } = await axios.get(url);
    dispatch({
      type: FETCH_JOBS,
      payload: data
    });
    callback();
  } catch (err) {
    console.log("Fetching jobs...", err);
  }
};
