function MeetingCard() {
  return (
    <div className="border border-gray-300 w-full h-full py-6 rounded-md flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 text-lg">Scheduled meetings</p>
        <p className="text-xl font-semibold">11:00 - 12:00</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 md:h-10 md:w-24">
          Open Zoom Link
        </button>
      </div>
    </div>
  );
}

export default MeetingCard;
