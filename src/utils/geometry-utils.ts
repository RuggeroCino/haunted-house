import { BufferGeometry, BufferAttribute, PointLight, DirectionalLight } from "three";

class GeometryUtils {
    setLightFar = (light: PointLight | DirectionalLight | null, value: number) => {
        if (light) {
            light.shadow.camera.far = value;
        }
    }

    applyUv2Attribute = (geometry: BufferGeometry | null) => {
        if (geometry) {
            geometry.setAttribute('uv2', new BufferAttribute(geometry.attributes.uv.array, 2));
        }
    }
}

export const geometryUtils = new GeometryUtils();
