import Cards from './components/Cards'

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCvLeTHwisItiq2ogbeAY_JJe5SBA38iLCA&s",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Software Engineer Intern",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/637/115/png-clipart-apple-electric-car-project-logo-apple-logo-company-trademark-thumbnail.png",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/045/588/943/non_2x/airbnb-logo-online-platform-for-rental-housing-free-vector.jpg",
    companyName: "Airbnb",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Remote"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Cards company={elem.companyName} 
                 datePosted={elem.datePosted} 
                 post={elem.post} 
                 logo={elem.brandLogo} 
                 tag1={elem.tag1} 
                 tag2={elem.tag2} 
                 pay={elem.pay} 
                 location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
