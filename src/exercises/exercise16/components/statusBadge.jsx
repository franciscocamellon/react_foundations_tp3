import React from "react";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import styles from "./styles.module.css";

function StatusBadge(props) {
  const getBadgeClass = () => {
    switch (props.status) {
      case "ativo":
        return "badge badge-ativo";
      case "inativo":
        return "badge badge-inativo";
      case "pendente":
        return "badge badge-pendente";
      default:
        return "badge";
    }
  };

  return (
    <div className={styles.badge_container}>
      <DirectionsRailwayIcon fontSize="large" />
      {props.status === "ativo" ? (
        <div className={styles.badge}>{props.status}</div>
      ) : props.status === "inativo" ? (
        <div className={styles.inactive_badge}>{props.status}</div>
      ) : (
        <div className={styles.pending_badge}>{props.status}</div>
      )}
    </div>
  );
}

export default StatusBadge;
