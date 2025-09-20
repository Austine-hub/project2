import React from 'react';
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role }) => {
  return (
    <div className={styles.member}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default TeamMember;
