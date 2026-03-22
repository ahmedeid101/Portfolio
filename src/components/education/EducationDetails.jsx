const EducationDetails = ({ item }) => {
  return (
    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm mb-2">
        <strong>Grade:</strong> {item.grade}
      </p>

      <ul className="text-sm list-disc ml-4">
        {item.activities.map((a, i) => <li key={i}>{a}</li>)}
        {item.achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  );
};

export default EducationDetails;