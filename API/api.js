document.addEventListener('DOMContentLoaded', () => {

            fetch("https://soundcloudstefan-skliarovv1.p.rapidapi.com/addTrackComment", {
                    "method": "POST",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                        "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                        "x-rapidapi-host": "Soundcloudstefan-skliarovV1.p.rapidapi.com"
                    },
                    "body": {
                        "trackId": "<REQUIRED>",
                        "accessToken": "<REQUIRED>",
                        "comment": "<REQUIRED>"
                    }
                })
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.error(err);
                });