import { HomeInterface ,ProfileInterface, ProjectInterface, ContactInterface} from "./index";

  

export default function Interface() {


    return (
      <div className="w-screen flex flex-col items-center">
        <div className="max-w-[1200px] w-full">
          {/* HOME */}
          <HomeInterface/>
          {/* PROJECTS */}
          <ProjectInterface />
             {/* Profile */}
             <ProfileInterface/>
          {/* CONTACT */}
          <ContactInterface/>
        </div>
      </div>
    );
  };