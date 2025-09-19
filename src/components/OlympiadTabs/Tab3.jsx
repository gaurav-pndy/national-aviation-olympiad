import { motion } from "framer-motion";

const Tab3 = () => {
  return (
    <div className="bg-[#f9fafb] rounded-lg p-6 max-w-7xl mx-auto px-4 md:px-6  space-y-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary text-xl  mb-3">Classes 8-9</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Basic Aerodynamics",
            "Aircraft Components",
            "Weather Systems",
            "Aviation History",
            "Navigation Basics",
          ].map((topic) => (
            <div
              key={topic}
              className="bg-white  p-4 border border-gray-300 text-primary text-lg"
            >
              {topic}
              <p className="text-gray-600 text-base mt-1">
                Comprehensive coverage with practical applications and
                real-world examples.
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
          {[
            "Advanced Aerodynamics",
            "Aircraft Systems",
            "Air Traffic Control",
            "Flight Planning",
            "Aviation Regulations",
          ].map((topic) => (
            <div
              key={topic}
              className="bg-white  p-4 border border-gray-300 text-primary text-lg"
            >
              {topic}
              <p className="text-gray-600 text-base mt-1">
                Comprehensive coverage with practical applications and
                real-world examples.
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
        <h3 className=" text-primary text-xl mb-3">Class 12</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Aerospace Engineering",
            "Flight Mechanics",
            "Aviation Management",
            "Advanced Navigation",
            "Airport Operations",
          ].map((topic) => (
            <div
              key={topic}
              className="bg-white  p-4 border border-gray-300 text-primary text-lg"
            >
              {topic}
              <p className="text-gray-600 text-base mt-1">
                Comprehensive coverage with practical applications and
                real-world examples.
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Tab3;
