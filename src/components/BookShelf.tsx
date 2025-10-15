
import { Box } from "@react-three/drei";

export const BookShelf = () => {
  return (
    <mesh>
      <Box position={[0, 0, 0]} args={[3, 0.3, 2]}>
        <meshStandardMaterial color="#ff5555" /> {/* ← 赤系の色 */}
      </Box>
      <Box position={[0, 2, 0]} args={[3, 0.3, 2]}>
        <meshStandardMaterial color="#ff5555" /> {/* ← 赤系の色 */}
      </Box>
      <Box position={[0, 1, -0.95]} args={[3, 2, 0.1]}>
        <meshStandardMaterial color="#ff5555" /> {/* ← 赤系の色 */}
      </Box>
      <Box position={[1.45, 1, 0]} args={[0.1, 2, 2]}>
        <meshStandardMaterial color="#ff5555" /> {/* ← 赤系の色 */}
      </Box>
      <Box position={[-1.45, 1, 0]} args={[0.1, 2, 2]}>
        <meshStandardMaterial color="#ff5555" /> {/* ← 赤系の色 */}
      </Box>
    </mesh>
  );
};
