export class Constant {
	/**
	 * Backup version threshold at which a "greater or equal" imported backup version is compatible with current code.
	 */
	public static readonly COMPATIBLE_BACKUP_VERSION_THRESHOLD: string = "6.4.0";

	/**
	 * Factors
	 */
	public static readonly KM_TO_MILE_FACTOR: number = 0.621371;
	public static readonly METER_TO_FEET_FACTOR: number = 3.28084;
}
