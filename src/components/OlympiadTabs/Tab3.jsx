import { motion } from "framer-motion";

const Tab3 = () => {
  const list1 = [
    {
      topic: "Basic Aerodynamics",
      description: "Fundamentals with real-world examples",
    },
    {
      topic: "Aircraft Components",
      description: "Structure and functionality",
    },
    {
      topic: "Weather Systems",
      description: "Understanding aviation weather impacts",
    },
    {
      topic: "Aviation History",
      description: "Key milestones in global and Indian aviation",
    },
    {
      topic: "Navigation Basics",
      description: "Introduction to navigation techniques",
    },
    {
      topic: "Basic Aerodynamics",
      description: "",
    },
  ];

  const list2 = [
    {
      topic: "Advanced Aerodynamics",
      description: "In-depth concepts with practical applications",
    },
    {
      topic: "Aircraft Systems",
      description: "Core systems and their operations",
    },
    {
      topic: "Air Traffic Control",
      description: "Principles of managing airspace and safety",
    },
    {
      topic: "Flight Planning",
      description: "Procedures for efficient and safe flights",
    },
    {
      topic: "Aviation Regulations",
      description: "National and international aviation standards",
    },
  ];

  const list3 = [
    {
      topic: "Aerospace Engineering",
      description: "Advanced aircraft and spacecraft principles",
    },
    {
      topic: "Flight Mechanics",
      description: "Performance, stability, and control",
    },
    {
      topic: "Aviation Management",
      description: "Industry operations and leadership insights",
    },
    {
      topic: "Advanced Navigation",
      description: "Modern navigation systems and applications",
    },
    {
      topic: "Airport Operations",
      description: "Ground handling, logistics, and airport management",
    },
  ];
  return (
    <div className="bg-[#f9fafb] rounded-lg p-6 max-w-7xl mx-auto px-4 md:px-6  space-y-8">
      {/* <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary text-xl  mb-3">Classes 8-9</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {list1.map(({ topic, description }) => (
            <div
              key={topic}
              className="bg-white  p-4 border border-gray-300 text-primary text-lg"
            >
              {topic}
              <p className="text-gray-600 text-base mt-1">
                {description ||
                  "Comprehensive coverage with practical applications and real-world examples."}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary text-xl  mb-3">Classes 10-11</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {list2.map(({ topic, description }) => (
            <div
              key={topic}
              className="bg-white  p-4 border border-gray-300 text-primary text-lg"
            >
              {topic}
              <p className="text-gray-600 text-base mt-1">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className=" text-primary text-xl mb-3">Class 12</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {list3.map(({ topic, description }) => (
            <div
              key={topic}
              className="bg-white  p-4 border border-gray-300 text-primary text-lg"
            >
              {topic}
              <p className="text-gray-600 text-base mt-1">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gray-700  text-lg md:text-xl text-justify mx-auto"
      >
        Each subject includes comprehensive coverage with practical applications
        and real-world examples, ensuring both theoretical knowledge and applied
        understanding.
      </motion.p> */}

      <div className="text-lg font-semibold text-center">TBA</div>
    </div>
  );
};

export default Tab3;
