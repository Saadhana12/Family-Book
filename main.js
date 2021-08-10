    var images = ["https://media-exp1.licdn.com/dms/image/C4E03AQFonMJLOSEHjg/profile-displayphoto-shrink_200_200/0/1538537846731?e=1634169600&v=beta&t=j96LLxJFfRuS8mj7uUdEPuK3kNr7Xo2Tasq48-Bshd4","https://media-exp1.licdn.com/dms/image/C5603AQFQd1IIugpPeQ/profile-displayphoto-shrink_100_100/0/1625694085786?e=1634169600&v=beta&t=ASSatvvW3hOXUbMCmefhUJO3F8TWex6SCw23nj5utWc", "https://media.istockphoto.com/vectors/-vector-id1224531031?k=6&m=1224531031&s=612x612&w=0&h=WvmHJOGdGeEEOsmeUztK6KgRIjC1pQASidIoi2nB77M=" , "https://image.freepik.com/free-vector/little-indian-girl-looks-up-shows-her-fingers-up-dark-skin-cartoon-character_71593-1022.jpg"]; 
           
var names = ["Anand Subramanian", "Sukanya Anand", "Sahana Anand", "Saadhana Anand"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 4
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}