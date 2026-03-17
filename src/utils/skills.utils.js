export const groupSkills = (skills = []) => {
  return skills.reduce((acc, skill) => {
    if (!skill || !skill.category) return acc; // ✅ guard

    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);

    return acc;
  }, {});
};