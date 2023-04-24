/**
 * Common yup validation with ant form
 * @param schema
 */
function yupSync(schema: any) {
  return {
    async validator({ field }: any, value: any) {
      await schema.validateSyncAt(field, { [field]: value })
    }
  }
}

export { yupSync }
