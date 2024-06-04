interface FormInpuError {
    issues: {
      code: string;
      minimum?: number;
      type: string;
      inclusive: boolean;
      exact: boolean;
      message: string;
      path: string[];
      expected?: string;
      received?: string;
    }[];
    name: string;
  }
  
export default function getErrorsForField(zodError: FormInpuError, fieldName: string): string {
    const errors = zodError.issues
      .filter((issue) => issue.path.includes(fieldName))
      .map((issue) => issue.message);
  
    return errors.join(', ');
  }
  