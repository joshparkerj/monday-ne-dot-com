/* return true if the person is an approved member of the task team */

SELECT manager_id = $1 OR (
  SELECT approved FROM team_member
  WHERE user_id = $1 AND team_id = (
    SELECT team FROM board
    WHERE id = (
      SELECT board_id FROM task
      WHERE id = $2
    )
  )
) AS approved FROM team WHERE id = (
  SELECT team FROM board
  WHERE id = (
    SELECT board_id FROM task
    WHERE id = $2
  )
);
