import Deleteblock from "./Deleteblock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./status";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <PriorityDisplay />
        <div className="ml-auto">
          <Deleteblock />
        </div>
      </div>
      <h1>Ticket Title</h1>
      <hr className="mb-2 h-px mt-1 border-0 bg-page " />
      <p className="whitespace-pre-wrap">This is the description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xm my-1">08/23/24 10:10PM</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
