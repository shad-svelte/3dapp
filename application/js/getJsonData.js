$(document).ready(function(){
    // AJAX service request to get the main text data from the API
    $.getJSON('./db/api.php', function(jsonObj) {
        console.log(jsonObj); // Log the response data
        
        if (jsonObj && Array.isArray(jsonObj) && jsonObj.length > 0) {
            jsonObj.forEach((item, index) => {
                // Check if properties exist before accessing them
                let title = item.title || "No title available";
                let subTitle = item.sub_title || "No subtitle available";
                let description = item.description || "No description available";
                let x3dModelTitle = item.x3dModelTitle || "No model title";
                let x3dCreationMethod = item.x3dCreationMethod || "No creation method";
                let galleryTitle = item.galleryTitle || "No gallery title";
                let galleryDescription = item.galleryDescription || "No gallery description";
                let CameraTitle = item.CameraTitle || "No camera title";
                let CameraSubtitle = item.CameraSubtitle || "No camera subtitle";

                // Assuming a specific structure based on index, adjust as necessary
                switch(index) {
                    case 0:
                        $('#title_home').html('<h2>' + title + '</h2>');
                        $('#subTitle_home').html('<h3>' + subTitle + '</h3>');
                        $('#description_home').html('<p>' + description + '</p>');
                        break;
                    case 1:
                        $('#title_left').html('<h2>' + title + '</h2>');
                        $('#subTitle_left').html('<h3>' + subTitle + '</h3>');
                        $('#description_left').html('<p>' + description + '</p>');
                        break;
                    case 2:
                        $('#title_centre').html('<h2>' + title + '</h2>');
                        $('#subTitle_centre').html('<h3>' + subTitle + '</h3>');
                        $('#description_centre').html('<p>' + description + '</p>');
                        break;
                    case 3:
                        $('#title_right').html('<h2>' + title + '</h2>');
                        $('#subTitle_right').html('<h3>' + subTitle + '</h3>');
                        $('#description_right').html('<p>' + description + '</p>');
                        break;
                    case 4:
                        $('#x3dModelTitle_coke').html('<h2>' + x3dModelTitle + '</h2>');
                        $('#x3dCreationMethod_coke').html('<p>' + x3dCreationMethod + '</p>');
                        $('#title_coke').html('<h2>' + title + '</h2>');
                        $('#subTitle_coke').html('<h3>' + subTitle + '</h3>');
                        $('#description_coke').html('<p>' + description + '</p>');
                        break;
                    case 5:
                        $('#x3dModelTitle_sprite').html('<h2>' + x3dModelTitle + '</h2>');
                        $('#x3dCreationMethod_sprite').html('<p>' + x3dCreationMethod + '</p>');
                        $('#title_sprite').html('<h2>' + title + '</h2>');
                        $('#subTitle_sprite').html('<h3>' + subTitle + '</h3>');
                        $('#description_sprite').html('<p>' + description + '</p>');
                        break;
                    case 6:
                        $('#x3dModelTitle_pepper').html('<h2>' + x3dModelTitle + '</h2>');
                        $('#x3dCreationMethod_pepper').html('<p>' + x3dCreationMethod + '</p>');
                        $('#title_pepper').html('<h2>' + title + '</h2>');
                        $('#subTitle_pepper').html('<h3>' + subTitle + '</h3>');
                        $('#description_pepper').html('<p>' + description + '</p>');
                        break;
                    case 7:
                        $('.title_gallery').html('<h2>' + galleryTitle + '</h2>');
                        $('.description_gallery').html('<p>' + galleryDescription + '</p>');
                        break;
                    case 8:
                        $('.x3dCameraTitle').html('<h2>' + CameraTitle + '</h2>');
                        $('.x3dCameraSubtitle').html('<p>' + CameraSubtitle + '</p>');
                        break;
                    default:
                        console.error('Unhandled data index:', index);
                }
            });
        } else {
            console.error('Data format is not as expected or data is missing.');
        }
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Request Failed: " + textStatus + ", " + error);
    });
});
