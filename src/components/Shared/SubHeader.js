import React,{useState} from 'react';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookIcon from '@material-ui/icons/Book';
import GroupIcon from '@material-ui/icons/Group';

const SubHeader = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const icons = [
        { icon: <OfflineBoltOutlinedIcon />, name: "Feed News" },
        { icon: <OndemandVideoOutlinedIcon />, name: "Videos" },
        { icon: <GolfCourseIcon />, name: "Courses" },
        { icon: <LibraryBooksIcon />, name: "Books" },
        { icon: <BookIcon />, name: "Blogs" },
        { icon: <GroupIcon />, name: "Groups" },
      ];
  return (
    <div className="grid grid-flow-col shadow-2xl justify-evenly items-center mx-48 my-2">
      {icons.map(({ icon, name }, index) => (
        <div
          key={index}
          className="text-center group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-center">
            {hoveredIndex === index ? (
              <span className="font-semibold underline text-blue-600">{name}</span>
            ) : (
              <span className='text-blue-600'>{icon}</span> 
            )}
          </div>
          <hr/>
        </div>
      ))}
      
    </div>

  )
}

export default SubHeader